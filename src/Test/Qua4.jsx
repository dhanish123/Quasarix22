import { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { FaTrash } from "react-icons/fa";

// 🔹 Draggable Keyword
const DraggableItem = ({ keyword }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: keyword.key,
    data: keyword,
  });

  const style = {
    padding: "12px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    background: "#f5f5f5",
    borderRadius: "6px",
    cursor: "grab",
    touchAction: "none",
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {keyword.key}
    </div>
  );
};

// 🔹 Droppable Field
const DroppableField = ({ path, value }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: path,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: "10px",
        margin: "6px 0",
        border: "2px dashed #bbb",
        background: isOver ? "#d1ffd1" : "#fafafa",
        borderRadius: "6px",
        minHeight: "35px",
        fontFamily: "monospace",
      }}
    >
      <strong>"{path.split(".").pop()}"</strong> :{" "}
      {typeof value === "string" ? `"${value}"` : value}
    </div>
  );
};

const Qua4 = () => {
  const [jsonData, setJsonData] = useState({
    payee: {
      msisdn: "MSISDN",
      transfer_type: "WALLET",
      wallet_id: 2913292137,
    },
    reference: "1765415439",
    pin: "encrypted_pin_value",
    transaction: {
      amount: 321,
      id: "1765415439",
    },
  });

  const [mapping, setMapping] = useState([]);

  const keywords = [
    { key: "MSISDN", type: "string" },
    { key: "WALLET_ID", type: "string" },
    { key: "AMOUNT", type: "number" },
    { key: "REFERENCE", type: "string" },
    { key: "TRANSFER_TYPE", type: "string" },
  ];

  // 🔥 Sensors
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor)
  );

  // 🔹 Drag End
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const keyword = active.data.current;
    const path = over.id;

    const updatedJson = JSON.parse(JSON.stringify(jsonData));
    const keys = path.split(".");
    let temp = updatedJson;

    const originalValue = keys.reduce((acc, k) => acc[k], jsonData);

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        temp[k] = `{{${keyword.key}}}`;
      } else {
        temp = temp[k];
      }
    });

    setJsonData(updatedJson);

    setMapping((prev) => {
      const exists = prev.find((m) => m.path === path);

      if (exists) {
        return prev.map((m) =>
          m.path === path
            ? { ...m, key: keyword.key, type: keyword.type }
            : m
        );
      }

      return [
        ...prev,
        {
          key: keyword.key,
          path,
          type: keyword.type,
          active: true,
          originalValue,
        },
      ];
    });
  };

  // 🔹 Toggle Active
  const toggleActive = (index) => {
    const updated = [...mapping];
    updated[index].active = !updated[index].active;
    setMapping(updated);
  };

  // 🔹 Delete Mapping
  const deleteMapping = (index) => {
    const item = mapping[index];

    const updatedJson = JSON.parse(JSON.stringify(jsonData));
    const keys = item.path.split(".");
    let temp = updatedJson;

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        temp[k] = item.originalValue;
      } else {
        temp = temp[k];
      }
    });

    setJsonData(updatedJson);
    setMapping((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔹 Render JSON
  const renderJSON = (obj, parent = "") => {
    return Object.keys(obj).map((key) => {
      const path = parent ? `${parent}.${key}` : key;

      if (typeof obj[key] === "object") {
        return (
          <div key={path} style={{ marginLeft: 15 }}>
            <strong>"{key}"</strong>: {"{"}
            {renderJSON(obj[key], path)}
            {"}"}
          </div>
        );
      }

      return <DroppableField key={path} path={path} value={obj[key]} />;
    });
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 20 }}>
        
        {/* LEFT */}
        <div style={{ flex: "1 1 250px" }}>
          <h3>Keywords</h3>
          {keywords.map((k) => (
            <DraggableItem key={k.key} keyword={k} />
          ))}
        </div>

        {/* JSON */}
        <div style={{ flex: "2 1 350px" }}>
          <h3>JSON Preview</h3>
          <div
            style={{
              border: "1px solid black",
              padding: 12,
              fontFamily: "monospace",
              background: "#fafafa",
            }}
          >
            {"{"}
            {renderJSON(jsonData)}
            {"}"}
          </div>
        </div>

        {/* TABLE */}
        <div style={{ flex: "2 1 350px", overflow: "auto" }}>
          <h3>Mapping Table</h3>

          <table border="1" cellPadding="8" width="100%">
            <thead>
                <tr style={{ textAlign: "center" }}>
                <th>Keyword</th>
                <th>Path</th>
                <th>Type</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {mapping.map((m, i) => (
                <tr key={i}>
                  <td>{m.key}</td>
                  <td>{m.path}</td>
                  <td>{m.type}</td>

                  <td>
                    <input
                      type="checkbox"
                      checked={m.active}
                      onChange={() => toggleActive(i)}
                    />
                  </td>

                  <td>
                    <button
                      onClick={() => deleteMapping(i)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#ff4d4f",
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </DndContext>
  );
};

export default Qua4;
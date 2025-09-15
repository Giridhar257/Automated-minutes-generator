// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // import React, { useState } from "react";
// // import axios from "axios";
// // const App: React.FC = () => {
// //   const [input, setInput] = useState<string>(""); // typed as string
// //   const [output, setOutput] = useState<string>("");
// //   const handleGenerate = async (): Promise<void> => {
// //     try {
// //       const res = await axios.post<{ result: string }>("http://127.0.0.1:8000/generate", {
// //         text: input,
// //       });
// //       setOutput(res.data.result);
// //     } catch (error) {
// //       console.error("Error generating:", error);
// //     }
// //   };
// //   return (
// //     <div style={{ padding: "2rem" }}>
// //       <h1>AMMG Generator</h1>
// //       <input
// //         type="text"
// //         placeholder="Enter your text"
// //         value={input}
// //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
// //       />
// //       <button onClick={handleGenerate}>Generate</button>
// //       {output && (
// //         <div
// //           style={{
// //             marginTop: "1rem",
// //             border: "1px solid gray",
// //             padding: "1rem",
// //           }}
// //         >
// //           <strong>Output:</strong> {output}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// // export default App;
// // import React, { useState } from "react";
// // import axios from "axios";
// // function App() {
// //   const [file, setFile] = useState<File | null>(null);
// //   const [participants, setParticipants] = useState("");
// //   const [output, setOutput] = useState("");
// //   const handleGenerate = async () => {
// //     if (!file) return alert("Please upload a file");
// //     const formData = new FormData();
// //     formData.append("file", file);
// //     formData.append("participants", participants);
// //     try {
// //       const res = await axios.post("http://127.0.0.1:8000/generate-minutes/", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });
// //       setOutput(res.data.minutes); // Change this if your backend response structure is different
// //     } catch (error) {
// //       console.error("Error generating minutes:", error);
// //       alert("Failed to generate minutes. Check console for details.");
// //     }
// //   };
// //   return (
// //     <div style={{ padding: "2rem" }}>
// //       <h1>AMMG Meeting Minutes Generator</h1>
// //       <input
// //         type="file"
// //         accept=".txt,.pdf,.mp3,.wav"
// //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
// //           if (e.target.files && e.target.files.length > 0) {
// //             setFile(e.target.files[0]);
// //           }
// //         }}
// //       />
// //       <br />
// //       <input
// //         type="text"
// //         placeholder="Participants (comma separated)"
// //         value={participants}
// //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setParticipants(e.target.value)}
// //         style={{ marginTop: "1rem", display: "block" }}
// //       />
// //       <button onClick={handleGenerate} style={{ marginTop: "1rem" }}>
// //         Generate Minutes
// //       </button>
// //       {output && (
// //         <div
// //           style={{
// //             marginTop: "1rem",
// //             border: "1px solid gray",
// //             padding: "1rem",
// //             whiteSpace: "pre-wrap",
// //           }}
// //         >
// //           <strong>Generated Minutes:</strong>
// //           <pre>{output}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// // export default App;
// import { useState } from "react";
// function App() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [participants, setParticipants] = useState("");
//     const [generatedData, setGeneratedData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [fileName, setFileName] = useState(null);
//     const handleFileChange = (event) => {
//         if (event.target.files && event.target.files.length > 0) {
//             setSelectedFile(event.target.files[0]);
//         }
//     };
//     const handleGenerate = async () => {
//         if (!selectedFile) {
//             alert("Please upload a file first!");
//             return;
//         }
//         const formData = new FormData();
//         formData.append("file", selectedFile);
//         formData.append("participants", participants);
//         formData.append("summarizer_model", "facebook/bart-large-cnn");
//         formData.append("max_len", "180");
//         formData.append("min_len", "30");
//         try {
//             setLoading(true);
//             setGeneratedData(null);
//             const response = await fetch("http://127.0.0.1:8000/generate-minutes/", {
//                 method: "POST",
//                 body: formData,
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 setGeneratedData(data);
//             }
//             else {
//                 console.error("Failed to generate minutes");
//                 alert("Error: Failed to generate minutes");
//             }
//         }
//         catch (err) {
//             console.error("Error calling backend:", err);
//             alert("Error calling backend, check console for details.");
//         }
//         finally {
//             setLoading(false);
//         }
//     };
//     return (_jsxs("div", { style: { maxWidth: "800px", margin: "2rem auto", padding: "1.5rem", border: "1px solid #ddd", borderRadius: "10px" }, children: [_jsx("h1", { style: { textAlign: "center", marginBottom: "1.5rem" }, children: "Automated Meeting Minutes Generator" }), _jsxs("div", { style: { marginBottom: "1.5rem", textAlign: "center" }, children: [_jsx("label", { htmlFor: "fileUpload", style: {
//                             display: "inline-block",
//                             padding: "12px 24px",
//                             backgroundColor: "#4f46e5",
//                             color: "white",
//                             borderRadius: "8px",
//                             cursor: "pointer",
//                             fontWeight: "600",
//                             transition: "all 0.3s ease",
//                             boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//                         }, onMouseOver: (e) => (e.target.style.backgroundColor = "#4338ca"), onMouseOut: (e) => (e.target.style.backgroundColor = "#4f46e5"), children: "\uD83D\uDCC2 Upload Meeting File" }), _jsx("input", { id: "fileUpload", type: "file", accept: ".txt,.pdf,.mp3,.wav", onChange: handleFileChange, style: { display: "none" } }), _jsxs("p", { style: { marginTop: "0.5rem", color: "#6b7280", fontSize: "0.9rem" }, children: ["Supported formats: ", _jsx("strong", { children: "txt, pdf, mp3, wav" })] }), fileName && (_jsxs("p", { style: {
//                             marginTop: "0.8rem",
//                             color: "#374151",
//                             fontSize: "1rem",
//                             fontWeight: "500",
//                         }, children: ["\u2705 Selected File: ", _jsx("strong", { children: fileName })] }))] }), _jsxs("div", { style: { marginBottom: "1rem" }, children: [_jsx("label", { htmlFor: "participantsInput", children: _jsx("strong", { children: "Participants (comma separated):" }) }), _jsx("br", {}), _jsx("input", { id: "participantsInput", type: "text", placeholder: "Alice, Bob, Charlie", title: "Enter participants separated by commas", value: participants, onChange: (e) => setParticipants(e.target.value), style: { width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" } })] }), _jsx("div", { style: { marginBottom: "1rem" }, children: _jsx("button", { onClick: handleGenerate, style: {
//                         padding: "0.7rem 1.2rem",
//                         backgroundColor: "#007bff",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "6px",
//                         cursor: "pointer",
//                     }, title: "Click to generate minutes", children: loading ? "Generating..." : "Generate" }) }), generatedData && (_jsxs("div", { style: {
//                     marginTop: "2rem",
//                     padding: "2rem",
//                     borderRadius: "16px",
//                     background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
//                     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//                     fontFamily: "Segoe UI, sans-serif",
//                 }, children: [_jsxs("h2", { style: { fontSize: "1.8rem", color: "#1e40af", marginBottom: "1rem" }, children: ["\uD83D\uDCCC ", generatedData.title] }), _jsxs("p", { style: { fontSize: "1rem", marginBottom: "1.5rem" }, children: [_jsx("strong", { style: { color: "#374151" }, children: "\uD83D\uDC65 Participants:" }), " ", _jsx("span", { style: { color: "#2563eb" }, children: generatedData.participants.join(", ") || "N/A" })] }), _jsxs("div", { style: { marginBottom: "1.5rem" }, children: [_jsx("h3", { style: { fontSize: "1.3rem", color: "#111827", marginBottom: "0.5rem" }, children: "\uD83D\uDCDD Summary" }), _jsx("p", { style: { lineHeight: "1.6", color: "#4b5563" }, children: generatedData.summary })] }), _jsxs("div", { style: { marginBottom: "1.5rem" }, children: [_jsx("h3", { style: { fontSize: "1.3rem", color: "#111827", marginBottom: "0.5rem" }, children: "\uD83D\uDCD6 Minutes" }), _jsx("p", { style: { lineHeight: "1.6", color: "#4b5563" }, children: generatedData.minutes })] }), _jsxs("div", { children: [_jsx("h3", { style: { fontSize: "1.3rem", color: "#111827", marginBottom: "0.5rem" }, children: "\u2705 Action Items" }), _jsx("ul", { style: { paddingLeft: "1.2rem", color: "#374151" }, children: generatedData.actions && generatedData.actions.length > 0 ? (generatedData.actions.map((action, i) => (_jsxs("li", { style: {
//                                         marginBottom: "0.75rem",
//                                         background: "#e0f2fe",
//                                         padding: "0.75rem 1rem",
//                                         borderRadius: "10px",
//                                         boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//                                     }, children: [_jsxs("span", { style: { display: "block", marginBottom: "0.25rem" }, children: [_jsx("strong", { children: "\uD83D\uDCCC Task:" }), " ", action.task] }), _jsxs("span", { style: { display: "block", marginBottom: "0.25rem" }, children: [_jsx("strong", { children: "\uD83D\uDC64 Person:" }), " ", action.person] }), _jsxs("span", { style: { display: "block" }, children: [_jsx("strong", { children: "\uD83D\uDCC5 Deadline:" }), " ", action.deadline] })] }, i)))) : (_jsx("li", { style: { color: "#6b7280" }, children: "No specific actions identified." })) })] })] }))] }));
// }
// export default App;

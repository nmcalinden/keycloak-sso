function JSONViewer({jwt}) {

	const styles = {
	  border: "1px solid #ccc",
	  padding: "10px",
	  backgroundColor: "#f9f9f9",
	  borderRadius: "5px",
	  whiteSpace: "pre-wrap",
	  wordWrap: "break-word",
	  fontFamily: "monospace",
	  fontSize: "14px",
	  lineHeight: "1.5",
	};
  
	return jwt ? (<div style={styles}>{JSON.stringify(jwt, null, 2)}</div>) : (<p>Please login.</p>);
  }
  
  export default JSONViewer;
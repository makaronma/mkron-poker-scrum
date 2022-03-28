const ResultBoard = ({ result, handleRetart }) => {
  return (
    <>
      <h4>Result: </h4>
      <div className="resultBoard">
        <table>
          <thead>
            <tr className="row">
              <th>User</th>
              <th>Poll</th>
            </tr>
          </thead>
          <tbody>
            {result.map((r, index) => (
              <tr key={`poll-result-row-${index}`}>
                <td className="email">{r.user.email}</td>
                <td className="poll">{r.poll}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="confirmBtn" onClick={handleRetart}>
        Restart{" "}
      </div>
    </>
  );
};

export default ResultBoard;

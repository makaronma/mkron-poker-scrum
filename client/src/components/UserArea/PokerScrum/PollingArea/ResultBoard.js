const ResultBoard = ({ result }) => {
  return (
    <>
      <h4>Result: </h4>
      <table className="resultBoard">
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
    </>
  );
};

export default ResultBoard;

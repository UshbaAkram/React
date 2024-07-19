export const Input = ({
  amount,
  setAmount,
  label,
  currency,
  currencyChange,
  options = {},
}) => {
  return (
    <div>
      <label>{label}</label>


      <input
        type="text"
        value={amount}
        onChange={(e) =>setAmount && setAmount(Number(e.target.value))}
      />

      <select value={currency} onChange={(e) => currencyChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

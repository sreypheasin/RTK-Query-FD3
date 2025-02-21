export default function Button({ title, color }) {
  return (
    <>
      <button
        className={`bg-blue-900 text-white py-2.5 px-5 rounded-md ${color}`}
      >
        {title || "default"}
      </button>
    </>
  );
}

export function ButtonBuy() {
  return (
    <>
      <button className={`bg-blue-900 text-white py-2.5 px-5 rounded-md`}>
        Buy
      </button>
    </>
  );
}

// 1. name export , 2. default export
// useState, useEffect

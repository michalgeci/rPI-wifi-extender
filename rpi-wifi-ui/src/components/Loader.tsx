export function Loader({show = false}: {show: boolean}) {
  return (
    <>
      {show && (<div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        backgroundColor: "#00000066",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>)}
    </>
  )
}
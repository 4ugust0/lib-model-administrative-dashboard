interface alertComponentInterface {
  type: string; // Danger or Warning,
  description: string; // Describe your alert or warning
}
export default function AlertComponent(props: alertComponentInterface) {
  function typeAlert(type: string) {
    let types = [
      {
        type: "Alert",
        colors: {
          title: "bg-red-500 text-white",
          description: "border-red-400 bg-red-100 text-red-700",
        },
      },
      {
        type: "Warning",
        colors: {
          title: "bg-orange-500 border-orange-500 text-white",
          description: "bg-orange-100 text-orange-700",
        },
      },
    ];

    let filterType = types.find((val) => val.type === type);

    return (
      filterType || {
        type: "undefined",
        colors: {
          title: "undefined",
          description: "undefined",
        },
      }
    );
  }

  return (
    <div role="alert">
      <div
        className={`${
          typeAlert(props.type).colors.title
        } font-bold rounded-t px-4 py-2`}
      >
        {typeAlert(props.type).type}
      </div>
      <div
        className={`border border-t-0 ${
          typeAlert(props.type).colors.description
        } rounded-b px-4 py-3`}
      >
        <p>{props.description || "define a description"}</p>
      </div>
    </div>
  );
}

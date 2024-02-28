import QRCode from "react-qr-code";

export const QrCodeComponent = ({ id }) => {
  return (
    <div>
      <QRCode
        value={`http://localhost:5173/employee/${id}`}
        size={60}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

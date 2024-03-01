import React from 'react';
import QRCode from 'qrcode.react';

const MyQRCode = ({ value }) => (
    <div className="QRCode">
        <QRCode
            value={value}
            size={256}
        />
    </div>
);

export default MyQRCode;

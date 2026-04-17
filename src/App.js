import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';

function App() {
  return (
        <div class="iframe-container">
            <div class="iframe-header">
                <h2>React SPA (Embebida en iframe)</h2>
                <a href="http://192.168.1.16:3000" target="_blank">Abrir en nueva pestaña →</a>
            </div>
            <iframe
                id="spaIframe"
                src="https://robert-virtual.github.io/frontend/"
                title="React SPA"
                allow="accelerometer; ambient-light-sensor; camera *; encrypted-media; geolocation; gyroscope; magnetometer; microphone *; midi; payment; usb; xr-spatial-tracking; clipboard-read; clipboard-write; display-capture"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-downloads allow-presentation"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
  );
}

export default App;

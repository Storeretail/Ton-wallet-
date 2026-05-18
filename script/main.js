// script/main.js
document.addEventListener("DOMContentLoaded", () => {
    const headerWrapper = document.getElementById("global-header");
    const navWrapper = document.getElementById("global-navigation");

    // 1. INJECT FIXED TOP-LEFT HEADER (Clean Root Path)
    if (headerWrapper) {
        headerWrapper.innerHTML = `
            <style>
                .header-section {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: var(--header-height);
                    background: var(--bg-color);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    padding: 0 15px;
                }
                .logo-link {
                    display: inline-block;
                    text-decoration: none;
                    height: 32px;
                }
                .brand-logo-wide {
                    height: 32px;
                    width: 160px;
                    object-fit: contain;
                    object-position: left center;
                    display: block;
                    border: none;
                }
            </style>
            <header class="header-section">
                <!-- Points directly to your root level domain path -->
                <a href="/" target="_self" class="logo-link">
                    <img src="/images/logo-wide.png" alt="Platform Logo" class="brand-logo-wide">
                </a>
            </header>
        `;
    }

    // 2. INJECT FIXED BOTTOM NAVIGATION FOOTER (Clean Directory Routing)
    if (navWrapper) {
        navWrapper.innerHTML = `
            <style>
                .nav-container {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: var(--footer-height);
                    background: var(--nav-bg);
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 2px 0;
                    z-index: 1000;
                }
                .nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: var(--nav-text-color);
                    font-size: 11px;
                    font-weight: 600;
                    flex: 1;
                    height: 100%;
                    justify-content: center;
                }
                .nav-item img {
                    width: 22px; 
                    height: 22px;
                    filter: invert(1);
                    margin-bottom: 1px;
                }
                .nav-item.active img {
                    filter: invert(0.4) sepia(1) saturate(5) hue-rotate(190deg);
                }
                .nav-item.active span {
                    color: var(--accent-color);
                }
            </style>
            <nav class="nav-container">
                <a href="/" target="_self" class="nav-item" id="nav-home">
                    <img src="https://img.icons8.com/?size=100&id=2797&format=png" alt="Home">
                    <span>Home</span>
                </a>
                <a href="/hustler" target="_self" class="nav-item" id="nav-hustler">
                    <img src="https://cdn-icons-png.flaticon.com/128/1420/1420462.png" alt="Hustler">
                    <span>Hustler</span>
                </a>
                <a href="/explore" target="_self" class="nav-item" id="nav-explore">
                    <img src="https://cdn-icons-png.flaticon.com/128/253/253318.png" alt="Explore">
                    <span>Explore</span>
                </a>
                <a href="/creator" target="_self" class="nav-item" id="nav-creator">
                    <img src="https://cdn-icons-png.flaticon.com/128/11279/11279839.png" alt="Creator">
                    <span>Creator</span>
                </a>
                <a href="/menu" target="_self" class="nav-item" id="nav-menu">
                    <img src="https://img.icons8.com/?size=128&id=OTxpMqWbm71F&format=png" alt="Menu">
                    <span>Menu</span>
                </a>
            </nav>
        `;

        // 3. TRACK HARDCODED HIGHLIGHT TARGETS
        const highlightToken = document.body.getAttribute("data-nav-highlight");
        if (highlightToken) {
            const activeElement = document.getElementById(`nav-${highlightToken}`);
            if (activeElement) {
                activeElement.classList.add("active");
            }
        }
    }
});

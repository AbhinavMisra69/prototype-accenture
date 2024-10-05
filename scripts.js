
const websitePages = [
    { url: "https://onepagelove.com/inspiration/portfolio", name: "Home" },
    { url: "https://onepagelove.com/templates", name: "About Us" },
    { url: "https://onepagelove.com/about", name: "Contact" },
    { url: "https://onepagelove.com/hire", name: "Services" },
    
];


function populateSidebar() {
    const iframeList = document.getElementById('iframe-list');

    
    websitePages.forEach((page, index) => {
        
        const previewIframe = document.createElement('iframe');
        previewIframe.src = page.url; 
        previewIframe.title = page.name;
        
       
        const button = document.createElement('button');
        button.textContent = page.name; // Set button text
        button.className = 'button';
        button.addEventListener('click', () => {
            displayInMainArea(page.url);
            highlightActiveButton(button); 
        });

   
        iframeList.appendChild(previewIframe);
        iframeList.appendChild(button);
    });
    if (websitePages.length > 0) {
        displayInMainArea(websitePages[0].url); 
        highlightActiveButton(document.querySelector('.button'), document.querySelector('.sidebar iframe'));
    }
    
}



function displayInMainArea(url) {
    const mainIframeTop = document.getElementById('main-iframe-top');
    const mainIframeBottom = document.getElementById('main-iframe-bottom');
    mainIframeTop.src = url;  
    mainIframeBottom.src = url; 
}


function highlightActiveButton(activeButton) {
 
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    const iframes = document.querySelectorAll('.sidebar iframe');
    iframes.forEach(iframe => {
        iframe.classList.remove('active-iframe');
    });

   
    activeButton.classList.add('active');
    activeIframe.classList.add('active-iframe');
}


populateSidebar();
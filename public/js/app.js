// Create and display the initial QR code when the page loads
const createFollowUsPage = () => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Follow Us</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    padding: 20px;
                }

                .container {
                    max-width: 600px;
                    width: 90%;
                    text-align: center;
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 20px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #1a1a1a;
                    margin-bottom: 1rem;
                    font-size: 2.5rem;
                }

                .subtitle {
                    color: #666;
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                }

                .social-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 1rem;
                    text-decoration: none;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .instagram {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                }

                .facebook {
                    background: #4267B2;
                    color: white;
                }

                .tiktok {
                    background: #000000;
                    color: white;
                }

                .icon {
                    font-size: 1.5rem;
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 2rem 1rem;
                    }
                    
                    h1 {
                        font-size: 2rem;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Follow Us</h1>
                <p class="subtitle">Stay connected with us on social media</p>
                <div class="social-links">
                    <a class="social-link instagram" href="https://instagram.com/ammar.hakim.12" target="_blank">
                        <i class="fab fa-instagram icon"></i>
                        Follow on Instagram
                    </a>
                    <a class="social-link facebook" href="https://facebook.com/ammar.hakim.12" target="_blank">
                        <i class="fab fa-facebook icon"></i>
                        Follow on Facebook
                    </a>
                    <a class="social-link tiktok" href="https://tiktok.com/@ammar.hakim.12" target="_blank">
                        <i class="fab fa-tiktok icon"></i>
                        Follow on TikTok
                    </a>
                </div>
            </div>
        </body>
        </html>
    `;

    return 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
};

const generateQR = () => {
    try {
        const outputDiv = document.getElementById('qr-output');
        outputDiv.innerHTML = '';

        // Use the new project URL (replace with your actual project ID)
        const socialPageUrl = 'https://qr-social-links.web.app/social.html';

        // Generate QR Code
        new QRCode(outputDiv, {
            text: socialPageUrl,
            width: 250,
            height: 250,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (err) {
        console.error('Error:', err);
        document.getElementById('qr-output').innerHTML = 
            '<p style="color: red;">Error generating QR code. Please try again.</p>';
    }
};

// Generate QR code when page loads
window.onload = generateQR;

const downloadQRCode = (canvas) => {
    const link = document.createElement('a');
    link.download = 'follow-us-qr.png';
    link.href = canvas.toDataURL();
    link.click();
};

const createSocialLinksHTML = () => {
    const instagram = document.getElementById('instagram').value;
    const tiktok = document.getElementById('tiktok').value;
    const facebook = document.getElementById('facebook').value;
    const businessName = document.getElementById('business-name').value || 'Follow Us';

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${businessName} - Social Media</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    padding: 20px;
                }

                .container {
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #1a1a1a;
                    margin-bottom: 1.5rem;
                    font-size: 2rem;
                }

                .social-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 1rem;
                    text-decoration: none;
                    border-radius: 10px;
                    font-size: 1.2rem;
                    font-weight: 500;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .social-link:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .instagram {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                }

                .tiktok {
                    background: #000000;
                    color: white;
                }

                .facebook {
                    background: #4267B2;
                    color: white;
                }

                .icon {
                    font-size: 1.5rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${businessName}</h1>
                <div class="social-links">
                    ${instagram ? `
                        <a class="social-link instagram" href="https://instagram.com/${instagram}" target="_blank">
                            <i class="icon fab fa-instagram"></i>
                            Follow on Instagram
                        </a>
                    ` : ''}
                    ${tiktok ? `
                        <a class="social-link tiktok" href="https://tiktok.com/@${tiktok}" target="_blank">
                            <i class="icon fab fa-tiktok"></i>
                            Follow on TikTok
                        </a>
                    ` : ''}
                    ${facebook ? `
                        <a class="social-link facebook" href="https://facebook.com/${facebook}" target="_blank">
                            <i class="icon fab fa-facebook"></i>
                            Follow on Facebook
                        </a>
                    ` : ''}
                </div>
            </div>
        </body>
        </html>
    `;

    return 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
};

document.getElementById('generate-qr').addEventListener('click', () => {
    const socialLinksURL = createSocialLinksHTML();
    generateQRCode(socialLinksURL);
}); 
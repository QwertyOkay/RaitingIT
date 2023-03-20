// Cookie Section
    const customerCookieResponse = (0, cookies_1.getCookie)('cookieConsent') || 'not set';
    const cookieBanner = doc.getElementById('cookie-banner');
    const cookieBannerBackground = doc.getElementById('cookie-background');
    const cookieConsentAccept = doc.getElementById('cookie-consent-accept');
    const cookieConsentReject = doc.getElementById('cookie-consent-reject');
    const cookieAcceptCheckbox = doc.getElementById('cookie-accept-checkbox');
    if (cookieBanner && cookieBannerBackground) {
        // Install zendesk webchat only if cookie consent is true or false
        if (customerCookieResponse === 'true' || customerCookieResponse === 'false') {
            (0, zendesk_1.initZendesk)(doc);
        }
        // Cookie consent not correctly set, so display cookie banner and background
        else {
            cookieBanner.classList.remove('hidden');
            cookieBannerBackground.classList.remove('hidden');
        }
        // Add the click events if the accept and reject buttons are present
        if (cookieConsentAccept) {
            cookieConsentAccept.addEventListener('click', () => {
                cookieBanner.classList.add('hidden');
                cookieBannerBackground.classList.add('hidden');
                (0, cookies_1.setCookie)('cookieConsent', 'true', 365);
                window.location.reload();
            });
        }
        if (cookieConsentReject) {
            cookieConsentReject.addEventListener('click', () => {
                cookieBanner.classList.add('hidden');
                cookieBannerBackground.classList.add('hidden');
                (0, cookies_1.setCookie)('cookieConsent', 'false', 365);
                window.location.reload();
            });
        }
    }
    // If the checkbox is present (i.e. on /cookie-policy) then add the click events to toggle consent
    // Note: the banner and background should not render on this page
    if (cookieAcceptCheckbox) {
        if (customerCookieResponse === 'true') {
            cookieAcceptCheckbox.addEventListener('click', () => {
                (0, cookies_1.setCookie)('cookieConsent', 'false', 365);
                window.location.reload();
            });
        }
        else {
            cookieAcceptCheckbox.addEventListener('click', () => {
                (0, cookies_1.setCookie)('cookieConsent', 'true', 365);
                window.location.reload();
            });
        }
    }
(document);

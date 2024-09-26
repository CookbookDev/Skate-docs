const COOKBOOK_PUBLIC_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmY1ZGE0MTIxODNjMDQxZWNhYjE2NmMiLCJpYXQiOjE3MjczODgyMjUsImV4cCI6MjA0Mjk2NDIyNX0.KdZbBN2AB957H70jq9YX8l_u7OMMF4F_YoVNd5frmUg';
//Inject Askcookbook script into head and div into body
(function() {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://cdn.jsdelivr.net/npm/@cookbookdev/docsbot/dist/standalone/index.cjs.js";
    scriptTag.defer = true;
    document.head.appendChild(scriptTag);
    const cookbookDiv = document.createElement('div');
    cookbookDiv.id = '__cookbook';
    cookbookDiv.setAttribute('data-api-key', COOKBOOK_PUBLIC_API_KEY); 
    document.body.appendChild(cookbookDiv);
})();


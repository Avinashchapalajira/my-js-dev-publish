document.addEventListener("DOMContentLoaded", function() {
    var button = document.createElement('button');
    button.id = 'create-dev-publish';
    button.innerText = 'Create Dev Publish Issue';

    // Append the button to Jira issue header
    document.querySelector('.issue-header-content').appendChild(button);

    // Handle the button click
    button.onclick = function() {
        const devPublishIssueTypeId = "10600"; // Replace with the correct issue type ID
        const projectId = "10000"; // Replace with the correct project ID
        window.location.href = `/secure/CreateIssueDetails!init.jspa?issuetype=${devPublishIssueTypeId}&pid=${projectId}`;
    };
});

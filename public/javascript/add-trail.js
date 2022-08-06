async function newFormHandler(event) {
    event.preventDefault();

    const trail = document.querySelector('input[name="trail-title"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;

    const response = await fetch(`api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            trail,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.new-trail-form').addEventListener('submit', newFormHandler)
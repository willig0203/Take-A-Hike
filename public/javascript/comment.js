async function commentFormHandler(event) {
    event.preventDefault();

     const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

     const trail_id1 = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
     ];
     const trail_id = trail_id1.charAt(0);
     console.log(comment_text + trail_id);

     if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                trail_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            console.log(document.location);
            document.location.reload();
        } else {
            alert(response.statusText)
        }
     }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)
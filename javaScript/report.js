let currentReview = 0;
const reviews = document.querySelectorAll('.report');
const dots = document.querySelectorAll('.dot');
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach(review => {
        review.classList.remove('active');
    });
    
    reviews[index].classList.add('active');
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentReview = index;
}

function nextReview() {
    let nextIndex = currentReview + 1;
    if (nextIndex >= totalReviews) nextIndex = 0;
    showReview(nextIndex);
}

function prevReview() {
    let prevIndex = currentReview - 1;
    if (prevIndex < 0) prevIndex = totalReviews - 1;
    showReview(prevIndex);
}

function goToReview(index) {
    showReview(index);
}

showReview(0);
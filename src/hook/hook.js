import { useEffect, useState } from "react"

let useReview = () => {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return [reviews, setReviews];
}

export default useReview;
import { Link } from "react-router-dom";
import placeHolder from "../assets/404.png"
import moment from 'moment';


const BlogCard = ({blog}) => {
    console.log(blog); 
    const {cover_image, created_at,id, title, description} = blog; 
    return (
        <div className="hover:scale-105 border-2 border-primary transition-all hover:border-secondary">
            <Link to={`/blog/${blog.id}}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolder} />
				<div className="p-2 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{moment().format("dddd, MMMM Do YYYY")}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>
    );
};

export default BlogCard;
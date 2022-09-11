import Link from "next/link";
import React from "react";

export interface CourseInterface {
  id: string;
  title: string;
  is_full: boolean;
  start_time: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  fee: string;
  duration: string;
}

interface Props {
  course_data: CourseInterface;
}

const CourseCard: React.FC<Props> = ({ course_data }) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-5">
      <div className="card p-0 border-primary rounded-0 hover-shadow">
        <img className="card-img-top rounded-0" src={course_data.image} alt="course thumb" />
        <div className="card-body">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <i className="ti-calendar mr-1 text-color"></i>
              {course_data.start_time}
            </li>
            <li className="list-inline-item">
              <p className="text-color">{course_data.category}</p>
            </li>
            {course_data.is_full && (
              <li className="list-inline-item">
                <p className="text-color text-danger">Filled out</p>
              </li>
            )}
          </ul>
          <Link href={`/courses/${course_data.id}`}>
            <a>
              <h4 className="card-title">{course_data.title}</h4>
            </a>
          </Link>
          <p className="card-text mb-4">{course_data.excerpt}</p>

          <Link href={`/courses/${course_data.id}`}>
            <a className="btn btn-primary btn-sm">See details</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

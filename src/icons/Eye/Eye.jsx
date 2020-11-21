import React from "react";

export const Eye = (props) => {
	const { size, title, color } = props;
	return (
		<svg
			version="1.1"
			id={title}
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width={size}
			height={size}
			enableBackground="new 0 0 109.484 122.88"
		>
			<g>
				<g>
					<path
						fill={color}
						clipRule="evenodd"
						d="M12,4C4.063,4-0.012,12-0.012,12S3.063,20,12,20    c8.093,0,12.011-7.969,12.011-7.969S20.062,4,12,4z M12.018,17c-2.902,0-5-2.188-5-5c0-2.813,2.098-5,5-5c2.902,0,5,2.187,5,5    C17.018,14.812,14.92,17,12.018,17z M12.018,9c-1.658,0.003-3,1.393-3,3c0,1.606,1.342,3,3,3c1.658,0,3-1.395,3-3    C15.018,10.392,13.676,8.997,12.018,9z"
						fillRule="evenodd"
					/>
				</g>
			</g>
		</svg>
	);
};

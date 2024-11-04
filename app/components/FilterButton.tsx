// components/FilterButton.js
import React from 'react';

const FilterButton = ({ handleFilterChange, filter, currentFilter, label }) => {
	return (
		<button
			onClick={() => handleFilterChange(filter)}
			className={`px-3 py-1 rounded-3xl border button
                bg-white 
                hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600
                focus:border-blue-700 focus:text-blue-600
                dark:text-white dark:border-stone-500
				dark:hover:bg-stone-700 dark:hover:text-white dark:hover:border-stone-500
                dark:focus:border-blue-600 dark:focus:text-white dark:focus:bg-blue-600
                ${
					currentFilter === filter
						? 'border-blue-600 text-blue-600 dark:border-blue-700 dark:bg-blue-600'
						: 'border-stone-300 text-stone-600 dark:bg-stone-800'
				}`}>
			{label}
		</button>
	);
};

export default FilterButton;

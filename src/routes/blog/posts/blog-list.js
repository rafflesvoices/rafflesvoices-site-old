class post {
	/**
	 * @param {any} year
	 * @param {any} title
	 * @param {any} description
	 * @param {string} url
	 * @param {number} month
	 * @param {number} day
	 */
	constructor(year, month, day, title, description, url){
		this.year = year;
		this.month = month;
		this.day = day;
		this.title = title;
		this.description = description;
		this.url = url;
	}
  }

let unfiltered_posts = [
	new post(2023, 3, 12, "1 Month to SYF!", "Lets GOOOOO!", "/blog/posts/2023/3/1-month-to-syf"),
	new post(2023, 2, 10, "Lorem Ipsium", "Lorem Ipsium", "/blog/posts/2023/2/lorem"),
]

export { unfiltered_posts };
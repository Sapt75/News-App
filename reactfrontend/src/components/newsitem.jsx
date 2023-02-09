import React from "react"


function NewsItem(props) {
    let time = new Date(props.date)
    let date = time.toUTCString()
    return (
        <div className="flex my-3">
            <div className="flex absolute">
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">{props.source}</span>
            </div>
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href={`/${props.url}`}>
                        <img className="rounded-t-lg" width={"auto"} height={"auto"} src={props.img} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {props.body}
                        </p>
                        <p className="my-4"><small className="text-red-500">By {props.author ? props.author : "Unkown"} on {date}</small></p>
                        <button onClick={() => (window.open(props.url, '_blank'))} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem


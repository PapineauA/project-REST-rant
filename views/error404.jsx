const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src = "/images/sylwia-bartyzel-_JVeovW1fBs-unsplash.jpg" 
                    alt = "Sleeping kitty"
                    width = "400"
                    height = "500"></img>
                    <div>Photo by <a href="https://unsplash.com/@sylwiabartyzel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sylwia Bartyzel</a> on <a href="https://unsplash.com/s/photos/free-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

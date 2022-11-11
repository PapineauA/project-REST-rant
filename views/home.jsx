const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/sanjeevan-satheeskumar-MG8c-4n1QVE-unsplash.jpg" 
                    alt = "Lushious Tree in a forest with the sun shining down."
                    width = "400"
                    height = "500"></img>
                    <div >
                        Photo by <a href="https://unsplash.com/@evannn_n?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sanjeevan  SatheesKumar</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home

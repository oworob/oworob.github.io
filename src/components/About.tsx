import React from 'react'

export function About() {
    return <div id="About">
        <div id="header">
            <h1>About <i className='fas fa-heart shake' id='icon' /></h1>
            <p>The person behind the screen.</p>
            <hr/>
        </div>

        <div id="content">
            <div id="main">
                <div id="about">
                    <h2>Hello :)</h2>
                    <p>My name is Olga, although feel free to just call me Ola, and I recently graduated in Computer Science from Gdańsk University.</p>
                    <p>My fascination with the realm of programming began as a child, and it has only grown stronger over the years. As I delved deeper into the world of technology, I discovered my passion for web development, UI design, and game development. With every line of code, driven by ambition and creativity, I strive to become a proficient developer and bring innovative ideas to life. Once invested in a project, I will not stop working until it is pixel perfect.</p>
                    <p>If you are looking for a dedicated and thorough individual to join your team, one who values quality over quantity, I'm up for the task!</p>
                </div>
                <img id='pfp' src="pfp.jpg" alt="me"></img>
            </div>
        </div>
            <hr/>
            <h3>What else do I do?</h3>
            <ul id="hobbies">
                <li id="art">
                    <div id="header">
                        <h4><li>Digital Art <i id="icon" className='fas fa-paintbrush'/> </li></h4>
                        <p>Creating art, particularly through digital painting, has been my lifelong passion. Having exchanged pencil for stylus, I find it fascinating how much can be achieved using the simplest tools.</p>
                        <p>I dedicate my free time to improving my skills, studying works of renowned arists, their approach to lighting, composition and color.</p>
                        <p>The best of my creations can be found on <a href="https://www.deviantart.com/archeonia" className="color bold hoverlink">DeviantArt</a>.</p>
                    </div>
                    <div id="images">
                        <img id='image1' alt='image1' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7930bceb-eef7-4734-a348-e452921447ab/dfnuo1s-16c3bc24-e182-4346-8fec-de12ed0578e0.jpg/v1/fill/w_839,h_952,q_70,strp/mother__by_archeonia_dfnuo1s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2MiIsInBhdGgiOiJcL2ZcLzc5MzBiY2ViLWVlZjctNDczNC1hMzQ4LWU0NTI5MjE0NDdhYlwvZGZudW8xcy0xNmMzYmMyNC1lMTgyLTQzNDYtOGZlYy1kZTEyZWQwNTc4ZTAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YxBVbRgp6XWANVe_WJou24HOmZBoJQ03dVx3xMdeDlA"></img>
                        <img id='image2' alt='image2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7930bceb-eef7-4734-a348-e452921447ab/df6bvdn-e92cddef-644c-41ee-9f6a-90440f1854c1.png/v1/fit/w_828,h_622,q_70,strp/forest_dragon_by_archeonia_df6bvdn-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2OCIsInBhdGgiOiJcL2ZcLzc5MzBiY2ViLWVlZjctNDczNC1hMzQ4LWU0NTI5MjE0NDdhYlwvZGY2YnZkbi1lOTJjZGRlZi02NDRjLTQxZWUtOWY2YS05MDQ0MGYxODU0YzEucG5nIiwid2lkdGgiOiI8PTIyMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G6DpSiwFUIoPCDoVxLUC0DuFEeoNo3oeFLtZe-VN7cY"></img>
                        <img id='image3' alt='image3' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7930bceb-eef7-4734-a348-e452921447ab/deyeyqh-e0128a69-14b8-4f7d-aa8c-ddd20ca89241.jpg/v1/fit/w_828,h_890,q_70,strp/nightwing_painting_by_archeonia_deyeyqh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkzMSIsInBhdGgiOiJcL2ZcLzc5MzBiY2ViLWVlZjctNDczNC1hMzQ4LWU0NTI5MjE0NDdhYlwvZGV5ZXlxaC1lMDEyOGE2OS0xNGI4LTRmN2QtYWE4Yy1kZGQyMGNhODkyNDEuanBnIiwid2lkdGgiOiI8PTE3OTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kDMlpYuCBlXCzIkMoeeKQxdx1fXvenC6t9OE3erFCdk"></img>
                    </div>
                </li>
                {/* <li>
                    <h4>Writing <i id="icon" className='fas fa-pen-nib' /></h4>
                </li>
                 <li id="games">
                    <div id="header">
                        <h4><li>Video Games <i id="icon" className='fas fa-gamepad'/> </li></h4>
                        <p>A builder, a roleplayer, a raider.</p>
                        <p>Since my early days I've been passionate about video games.</p>
                    </div>
                    <div id="images">
                      
                    </div>
                </li> */}
              
            </ul>
        </div>
    

}
const main = document.querySelector(".main");
const videos = document.querySelector(".videos");
const wrapper = document.querySelector(".wrapper-start");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    wrapper.classList.add("active");
    main.classList.add("active");
    videos.play();
});


if(main){
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="info-evelop">
                <div class="bg">
                    <img src="./bg.jpeg" alt="">
                </div>
                <div class="purpose">
                    <div class="left-evelop">
                        <div class="cauchuc">
                            Xuân này hơn hẳn mấy xuân qua.
                        </div>
                        <div class="cauchuc">
                            Phúc lộc đưa nhau đến từng nhà.
                        </div>
                        <div class="cauchuc">
                            Vài lời cung chúc tân niên mới.
                        </div>
                        <div class="cauchuc">
                            Vạn sự an khang vạn sự lành.
                        </div>
                    </div>
                    <div class="right-evelop">
                        <div class="cauchuc">
                            Hoa đào nở, chim én về, mùa xuân lại đến.
                        </div>
                        <div class="cauchuc">
                            Phúc lộc đưa nhau đến từng nhà.
                        </div>
                        <div class="cauchuc">
                            Chúc một năm mới:   
                        </div>
                        <div class="cauchuc">
                            nghìn sự như ý,
                        </div>
                        <div class="cauchuc">
                            vạn sự như mơ,
                        </div>
                        <div class="cauchuc">
                            triệu sự bất ngờ,
                        </div>
                        <div class="cauchuc">
                            tỷ lần hạnh phúc.
                        </div> 
                    </div>
                </div>
            </div>
            
    `
    main.appendChild(div);
    const x = document.querySelectorAll(".cauchuc");
    let i = 0;
    const y = setInterval(()=>{
        show(x[i])
        i++;
        if(i == x.length){
            clearInterval(y);
        }
    }, 1000);
}

function show(t){
    t.classList.add("active");
}


$(document).ready(function(){
    $("#btnThem").click(function(){
        var conten = $("#content").val()
        var date = $("#date").val()
        $(".items").prepend(`
            <div class="item active">
            <div><img src="lab2/calendar2.png" alt="calendar" /></div>
            <div>
                <a href="#">${conten}</a>
            </div>
            <div>
                ${date}
            </div>
            <div>
                <input type="button" value="Xoa" />
            </div>
        </div>
        `) 
      setTimeout(function() {
          $(".item").removeClass(" active")
      },2000)
    })
})
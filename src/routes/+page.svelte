<script>

    import {Toaster, toast} from 'svelte-sonner'

    function open_tasks(img) {
        let task = img.parentNode;
        let is_open = task.classList.contains("open_state");
        let old = is_open ? "open_state" : "close_state";
        let replace = is_open ? "close_state" : "open_state";
        task.classList.replace(old, replace);
    }

    function action_on_task(element, action) {
        if (element.type === "keyup" && element.key !== "Enter") {
            return;
        }
        let task = element.target.parentNode.parentElement;
        let percentage = task.getElementsByClassName("percentage_fill").item(0);
        let task_name = task.getElementsByClassName("erasing_tasks_name").item(0).textContent;
        let replace_by = (action === "play") ? "in_progress" : (action === "pause") ? "in_pause" : "in_error";
        percentage.classList.replace(percentage.classList.item(1), replace_by);

        if (action === "play") {
            toast.success(`Launch : ${task_name}`);
            return;
        }
        if (action === "pause") {
            toast.info(`Pausing : ${task_name}`);
            return;
        }
        if (action === "stop") {
            toast.error(`Stopping : ${task_name}`);
        }

    }
</script>
<main class="container">
    <div class="add_erasing_tasks" onclick={() => {alert("test");}} onkeyup={(e) => {console.log(e)}} aria-label="test"
         role="button" tabindex="0"><span>+</span> Add erasing task
    </div>
    <div class="erasing_tasks" id="task_NDY2ODY3YWEtZTM2NC00MmEzLWFiYTItODExNGViM2VmY2Ex">
        <div class="erasing_tasks_name" ondblclick={(e) => {
            console.log(e);
            e.target.contentEditable=true;
            e.target.className='inEdit';
        }} onblur={(e) => {e.target.contentEditable=false;e.target.className='erasing_tasks_name';}} contenteditable="false">Erasing Tasks</div>
        <div class="percentage">
            <div class="percentage_fill in_progress" style="width: 50%;"></div>
        </div>
        <div class="percentage_number">90%</div>
        <div class="erase_method">Erase Method</div>
        <div class="action">
            <img src="./actions/btn_play.svg" alt="play for task_NDY2ODY3YWEtZTM2NC00MmEzLWFiYTItODExNGViM2VmY2Ex"
                 onclick={(e) => {action_on_task(e,"play")}} onkeyup={(e) => {action_on_task(e,"play")}}
                 aria-label="btn for "
                 role="button" tabindex="0">
            <img src="./actions/btn_pause.svg" alt="pause for task_NDY2ODY3YWEtZTM2NC00MmEzLWFiYTItODExNGViM2VmY2Ex"
                 onclick={(e) => {action_on_task(e,"pause")}} onkeyup={(e) => {action_on_task(e,"pause")}}
                 aria-label="btn for "
                 role="button" tabindex="0">
            <img src="./actions/btn_stop.svg" alt="stop for task_NDY2ODY3YWEtZTM2NC00MmEzLWFiYTItODExNGViM2VmY2Ex"
                 onclick={(e) => {action_on_task(e,"stop")}} onkeyup={(e) => {action_on_task(e,"stop")}}
                 aria-label="btn for "
                 role="button" tabindex="0">
        </div>
        <div class="open_btn close_state" onclick={(e) => {open_tasks(e.target)}} aria-label="expends button" role="button" tabindex="0"><img alt="expend task_NDY2ODY3YWEtZTM2NC00MmEzLWFiYTItODExNGViM2VmY2Ex" src="./actions/down_arrow.svg">
        </div>
    </div>
    <Toaster richColors theme="dark" position="top-right" />
</main>
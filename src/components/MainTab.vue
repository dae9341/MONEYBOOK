<template>
    <div class="mainTabWrap">
        <div class="mainTab" id="mainTab">
            <ul>
                <li><a href="#">종합</a></li>
                <li><a href="#">수입</a></li>
                <li><a href="#">지출</a></li>
            </ul>
        </div>

        <div class="mainTabContent" >
            <ExpendContent></ExpendContent>
            <IncomeContent></IncomeContent>
        </div>
    </div>
</template>

<script>
    import ExpendContent from '../components/ExpendContent.vue'
    import IncomeContent from '../components/IncomeContent.vue'

    export default {
        name:"cpnt-mainTab",
        components:{
            ExpendContent,IncomeContent
        }
    }


    $(function () {
        var status = 'all';
        $("#mainTab").find('li').each(function () {
            var $me = $(this);
            var btn = $(this).children('a');

            btn.on('click', function () {
                var name = $(this).text();
                switch (name) {
                    case '종합':
                        status = 'all';
                        break;
                    case '수입':
                        status = 'in';
                        break;
                    case '지출':
                        status = 'ex';
                        break;
                    default:
                        status = 'all';
                        break;

                }

            });
        });
    })
</script>
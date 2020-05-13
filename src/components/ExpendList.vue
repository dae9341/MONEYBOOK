<template>
    <div class="cpnt-expendList">
        <div v-for="item in expendDataFunc">
            <div id="">
                <ul>
                    <li>
                        날짜: {{item.date}}
                    </li>
                    <li>
                        지출금액: {{item.spendValue}}
                    </li>
                    <li>
                        지불유형: {{item.spendType}}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    import test from "../test.json"
    export default {
        name: "cpnt-expendList",
        data: function testData(){
            return test
        },
        computed:{
            expendDataFunc: function () {
                return test.expendData.map(datas => {
                    console.log(datas.id);
                    return datas;
                })
            }
        }
    }
</script>
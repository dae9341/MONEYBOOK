<template>
    <div class="test-child">
        <ul v-for="item in testDatasFunc()">
            <li>id : {{item.id}}</li>
            <li>이름 : {{item.name}}</li>
            <li>주소 : {{item.address}}</li>
            <li>나이 : {{item.age}}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name:'test-item-child',
        props: ['tests']
        ,
        methods:{
            testDatasFunc() {
                var data = this.tests;
                return data.testData.map(items =>{
                    console.log(items);
                    return items;
                });

            },
        },
    }
</script>
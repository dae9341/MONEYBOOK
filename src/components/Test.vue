<template>
    <div>
        <h1>사용자</h1>

        <ul v-for="item in tests">
            <li>id : {{item.id}}</li>
            <li>이름 : {{item.name}}</li>
            <li>주소 : {{item.address}}</li>
            <li>나이 : {{item.age}}</li>
        </ul>
    </div>
</template>

<script>
    import test from "../test.json"

    export default {
        name :"test-item",
        computed:{
            tests() {
                return test.testData.map((items) =>{
                    console.log(items);
                    return items;
                })
            }
        },


    }

</script>
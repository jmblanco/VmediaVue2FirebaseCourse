<template>
    <div>
        <custom-element type="footer">Hola footer</custom-element>
        <custom-element type="header">Hola header</custom-element>
        <custom-element type="aside">Hola aside</custom-element>
        <custom-element type="nav">Hola nav</custom-element>
        <custom-element type="main">Hola main</custom-element>
    </div>
</template>

<script>
    import customElement from './components/CustomElement.component.vue';
    export default {
        components: { customElement }
    }
</script>

<style>
</style>
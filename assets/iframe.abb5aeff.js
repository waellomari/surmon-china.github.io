import{u as a,g as o}from"./index.df97e8c3.js";import{N as s}from"./navbar.e516e287.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{i as n,F as c,G as i,I as p,P as l,E as d}from"./vendor.a67adc45.js";const _=n({name:"legacy-iframe",components:{Navbar:s},props:{src:String,id:{type:String,required:!0}},setup(e){return a({bodyAttrs:{style:"overflow: hidden;"}}),{legacyUrl:o(e.id)}}}),m=["src"];function f(e,u,y,g,v,b){const r=d("navbar");return c(),i("div",null,[p(r,{class:"legacy-header",repository:e.id},null,8,["repository"]),l("iframe",{class:"legacy-iframe",src:e.src||e.legacyUrl},null,8,m)])}var B=t(_,[["render",f],["__scopeId","data-v-1907eab7"]]);export{B as I};
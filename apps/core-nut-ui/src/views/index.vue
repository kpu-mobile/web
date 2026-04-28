<script setup lang="ts">
const input = ref('')
const radio = ref(1)
const rate = ref(3)
const toggle = ref(true)
</script>

<template>
  <AppPageLayout :navbar="false" tabbar>
    <KmPageMain title="Button">
      <NutButton type="primary">
        主要按钮
      </NutButton>
      <NutButton type="success">
        成功按钮
      </NutButton>
      <NutButton type="default">
        默认按钮
      </NutButton>
      <NutButton type="danger">
        危险按钮
      </NutButton>
      <NutButton type="warning">
        警告按钮
      </NutButton>
    </KmPageMain>
    <NutForm class="mx-4">
      <NutFormItem label="用户名">
        <NutInput v-model="input" label="文本" placeholder="请输入用户名" />
      </NutFormItem>
    </NutForm>
    <KmPageMain title="Radio">
      <NutRadioGroup v-model="radio">
        <NutRadio :label="1">
          单选框 1
        </NutRadio>
        <NutRadio :label="2">
          单选框 2
        </NutRadio>
      </NutRadioGroup>
    </KmPageMain>
    <KmPageMain title="Rate">
      <NutRate v-model="rate" />
    </KmPageMain>
    <KmPageMain title="Switch">
      <NutSwitch v-model="toggle" />
    </KmPageMain>
  </AppPageLayout>
</template>

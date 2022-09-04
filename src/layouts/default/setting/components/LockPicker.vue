<template>
  <div :class="prefixCls">
    <template v-for="item in lockTypeList || []" :key="item.path">
      <Tooltip :title="item.title" placement="bottom">
        <div
          @click="handler(item)"
          :class="[
            `${prefixCls}__item`,
            `${prefixCls}__item--${item.type}`,
            {
              [`${prefixCls}__item--active`]: def === item.type,
            },
          ]"
        >
          <Image width="100%" :preview="false" :src="item.path" />
        </div>
      </Tooltip>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { Tooltip, Image } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { LockTypeList } from '../enum';

  const { prefixCls } = useDesign('setting-lock-type-picker');
  defineProps({
    lockTypeList: {
      type: Array as PropType<typeof LockTypeList>,
      defualt: () => [],
    },
    handler: {
      type: Function as PropType<Fn>,
      default: () => ({}),
    },
    def: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-setting-lock-type-picker';

  .@{prefix-cls} {
    //display: flex;
    &__item {
      position: relative;
      width: 30%;
      display: inline-flex;
      overflow: hidden;
      cursor: pointer;
      background-color: #f0f2f5;
      border-radius: 4px;
      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
      margin-right: 1.06em;
      margin-bottom: 1.06em;

      &::before,
      &::after {
        position: absolute;
        content: '';
      }

      &--sidebar,
      &--light {
        &::before {
          top: 0;
          left: 0;
          z-index: 1;
          width: 33%;
          height: 100%;
          background-color: #273352;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 25%;
          background-color: #fff;
        }
      }

      &--mix {
        &::before {
          top: 0;
          left: 0;
          width: 33%;
          height: 100%;
          background-color: #fff;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 25%;
          background-color: #273352;
        }
      }

      &--top-menu {
        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 25%;
          background-color: #273352;
        }
      }

      &--dark {
        background-color: #273352;
      }

      &--mix-sidebar {
        &::before {
          top: 0;
          left: 0;
          z-index: 1;
          width: 25%;
          height: 100%;
          background-color: #273352;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 25%;
          background-color: #fff;
        }

        .mix-sidebar {
          position: absolute;
          left: 25%;
          width: 15%;
          height: 100%;
          background-color: #fff;
        }
      }

      &:hover,
      &--active {
        //padding: 12px;
        &::before,
        &::after {
          width: 100%;
          height: 100%;
          border: 2px solid @primary-color;
          border-radius: 0;
        }
      }
    }

    &__item:nth-child(3n) {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
</style>

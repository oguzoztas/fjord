<template>
    <div class="mt-2">
        <b-button
            class="mr-2"
            size="sm"
            v-for="(repeatables, type) in field.repeatables"
            :key="type"
            @click.prevent="add(type)"
        >
            <fa-icon icon="plus" />
            add {{ type }}
        </b-button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'FieldBlockAddRepeatableButtons',
    props: {
        field: {
            type: Object,
            required: true
        },
        model: {
            type: Object,
            required: true
        },
        sortableBlocks: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters(['form'])
    },
    methods: {
        async add(type) {
            let payload = {
                type: type
            };

            let response = null;
            try {
                response = await axios.post(
                    `${this.field.route_prefix}/block/${this.field.id}`,
                    payload
                );
            } catch (e) {
                console.log(e);
                return;
            }

            let model = response.data;

            this.$emit('newBlock', model);

            Fjord.bus.$emit('field:updated', 'block:added');

            this.$bvToast.toast(this.$t('fj.new_block', { type }), {
                variant: 'success'
            });
        }
    }
};
</script>

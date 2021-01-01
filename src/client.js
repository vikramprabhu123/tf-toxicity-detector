import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-wasm';

console.log("TF Version: ", tf.version);
//tf.setBackend('cpu');
tf.setBackend('wasm');
tf.ready()
.then(() => {
    console.log(tf.getBackend());
})

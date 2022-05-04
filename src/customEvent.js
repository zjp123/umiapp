const event = new CustomEvent('cat', {
  detail: {
    hazcheeseburger: true,
  },
});

// function diyEvent (name, parames) {
//     return () => {
//         return new CustomEvent(name, {parames})
//     }
// }

export default event;

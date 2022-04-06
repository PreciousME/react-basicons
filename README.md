# react-croppa

Simple React cropper component

## Installation

```
npm i react-croppa
```

## Usage

For image uploads

```ts
<Cropper
    imageUrl={URL.createObjectURL(file)}
    onCropComplete={(output: Blob) => {
        doSomethingWithCroppedImage(output)
    }}
    readyToUse={true | false}
/>
```


`imageUrl`: url for the image that needs to be cropped.

`onCropComplete`: callback function that uses the cropped image.

`readyToUse`: condition that lets the cropper know that the user is done manipulating the image boundaries. When this value changes to `true`, the actual image cropping will happen and the callback function will be executed.

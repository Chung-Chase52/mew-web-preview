var pixi_minigate;
(function (pixi_minigate) {
    Object.assign(PIXI.Container.prototype, {
        tempPoint: new PIXI.Point(0, 0),
        alignAnchor: new PIXI.Point(0, 0),
        alignPosition: new PIXI.Point(0, 0),
        alignOffset: new PIXI.Point(0, 0),
        setAlignPosition: function (anchorX, anchorY, offsetX, offsetY) {
            this.alignAnchor.x = anchorX;
            this.alignAnchor.y = anchorY;
            this.alignOffset.x = offsetX;
            this.alignOffset.y = offsetY;
            if (this.parent) {
                this.alignPosition.x = this.parent.width * (1 / this.parent.scale.x) * this.alignAnchor.x;
                this.alignPosition.y = this.parent.height * (1 / this.parent.scale.y) * this.alignAnchor.y;
                this.transform.position.set(this.alignPosition.x + this.alignOffset.x, this.alignPosition.y + this.alignOffset.y);
            }
        },
        onResize: function () {
            console.log("[src] Container onResize");
        }
    });
})(pixi_minigate || (pixi_minigate = {}));
var pixi_minigate;
(function (pixi_minigate) {
    Object.assign(PIXI.Sprite.prototype, {});
})(pixi_minigate || (pixi_minigate = {}));
var pixi_minigate;
(function (pixi_minigate) {
    PIXI.minigate = pixi_minigate;
})(pixi_minigate || (pixi_minigate = {}));
//# sourceMappingURL=pixi-minigate.js.map
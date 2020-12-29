import React, { Component } from "react";

export default class Footer extends Component {
    // App.propTypes={

    // }
    getYear() {
        if (this.props.years !== undefined) {
            return `${this.props.years[0]} - ${new Date().getFullYear()}`;
        } else {
            return new Date().getFullYear();
        }
    }
    getCopyrightText()
    {
        if(this.props.copyrightText)
            return 'copyright';
    }
    getCopyRightIconStyle()
    {
        if(this.props.copyrightIconStyle)
            return this.props.copyrightIconStyle;
        let style={ color: "white",
            alignSelf: "center",
            marginRight: 10}
        return style;

    }
    getCopyRightTextStyle()
    {
        if(this.props.copyrightTextStyle)
            return this.props.copyrightTextStyle;
        let style={ color: "white",
            alignSelf: "center",
            marginRight: 10};
        return style;

    }
    getTextStyle()
    {
        if(this.props.textStyle)
            return this.props.textStyle;
        let style={ color: "white",
            alignSelf: "center",
            marginRight: 10};
        return style;

    }

    render() {
        console.log(this.props);
        const styles = {
            footer: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: this.props.height || 100,
                backgroundColor: this.props.bgColor || "#ffdead"
            }
        };

        if (this.props.copyrightIcon) {
            return (
                <div style={styles.footer}>
                    <p
                        style={this.getCopyRightIconStyle()}
                    >
                        &copy;</p>
                    <p
                        style={this.getCopyRightTextStyle()}
                    >
                        {this.getCopyrightText()} {this.getYear()}
                    </p>
                    <p
                        style={this.getTextStyle()}
                    >
                        {this.props.text}
                    </p>
                </div>
            );
        }
        else if (this.props.copyrightText) {
            return (
                <div style={styles.footer}>
                    <p
                        style={{
                            color: this.props.copyColor || "white",
                            alignSelf: this.props.copyPosition || "center",
                            marginRight: 10
                        }}
                    >
                        {this.getCopyrightText()} {this.getYear()}
                    </p>
                    <p
                        style={{
                            color: this.props.textColor || "white",
                            alignSelf: this.props.textPosition || "center",
                            display: "block"
                        }}
                    >
                        {this.props.text}
                    </p>
                </div>
            );
        }
        else if (this.props.text) {
            return (
                <div style={styles.footer}>
                    <p
                        style={{
                            color: this.props.textColor || "white",
                            alignSelf: this.props.textPosition || "center"
                        }}
                    >
                        {this.props.text}
                    </p>
                </div>
            );
        } else {
            return (
                <div style={styles.footer}>
                    <p style={styles.textColor}> @CopyRight İrem Aksoy Buğra Göksu Zeynep Tırak Sevgi Reyhani</p>
                </div>
            );
        }
    }
}
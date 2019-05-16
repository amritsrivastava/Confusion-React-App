import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderComment(dish) {
    if (dish.comments) {
      return Object.values(dish.comments).map(comment => {
        return (
          <div>
            <ul key={comment.id} className="list-unstyled">
              <li className="mt-1">{comment.comment}</li>
              <li className="mt-1">
                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          </div>
        );
      });
    } else {
      return <div />;
    }
  }

  render() {
    if (this.props.dish) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {this.renderComment(this.props.dish)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DishDetail;

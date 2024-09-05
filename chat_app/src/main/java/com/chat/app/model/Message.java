package com.chat.app.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Message {
    @JsonProperty(value = "name")
    private String name;
    @JsonProperty(value = "content")
    private String content;
}

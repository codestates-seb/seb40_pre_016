package stackoverflow.pre_project.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.user.dto.UserProfileDto;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;

import java.lang.module.FindException;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional(readOnly = true)
    public UserProfileDto profile(long id, long userId){
        UserProfileDto dto = new  UserProfileDto();
        User userEntity = userRepository.findById(id).orElseThrow(() ->
                new FindException("해당 유저를 찾을 수 없습니다."));
        dto.setOwnerState(id == userId);
        dto.setUser(userEntity);
        return dto;
    }

    @Transactional
    public User update(long id, User user){
        User userEntity = userRepository.findById(id).orElseThrow(() ->
                new FindException("해당 유저를 찾을 수 없습니다."));

        userEntity.setUsername(user.getUsername());
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);

        userEntity.setPassword(encPassword);
        userEntity.setMessage(user.getMessage());
        return userEntity;
    }

    @Transactional(readOnly = true)
    public Page<User> userList(int page, int size) {
        return userRepository.findAll(
                PageRequest.of(page - 1, size, Sort.by("userId").descending()));    }
}
